from flask import Flask, render_template, jsonify, request

app = Flask(__name__)


@app.route('/')
def home():

    return render_template('index.html', orcamento=0)


@app.route('/submit', methods=['POST'])
def submit():
    try:
        peca = float(request.form['peca'])
        frete = float(request.form['frete'])
        pct = 0.25
        orcamento = ((peca * pct) + peca + frete)
        return jsonify({'orcamento':orcamento})
    except ValueError:
        return jsonify({'erro': 'Invalid Input' }), 400


@app.route('/cadastro', methods=['POST'])
def cadastro():
    try:
        marca = request.form['marca']
        modelo = request.form['modelo']
        valor = float(request.form['valor'])
        quant = int(request.form['quant'])

        item = {
            'marca': marca,
            'modelo': modelo,
            'valor': valor,
            'quant': quant 
        }
        
        return jsonify(item)
    except ValueError:
        return jsonify({'erro':'Invalid Input'}), 400


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True) 