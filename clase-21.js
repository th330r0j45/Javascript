function persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

persona.prototype.saludar = function() {
    this.altura > 1.8 ? console.log(`${this.nombre} es alto`) : console.log(`${this.nombre} es bajo`)
}
var teo = new persona('Teo', 'Rojas', 1.80);
var leo = new persona('Leo', 'Rojas', 1.75);
var vivi = new persona('Vivi', 'Rojas', 1.56);
var laura = new persona('Laura', 'Rojas', 1.98);

teo.saludar();
leo.saludar();
vivi.saludar();
laura.saludar();