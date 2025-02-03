from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/')
def empty():
    return jsonify({'message': 'Everything is fine)))'})


if __name__ == '__main__':
    app.run(port=5000, debug=False, host='0.0.0.0')

# Просто, чтоб не было Hello world))