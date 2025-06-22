document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Simulamos validación simple
    if (user === 'admin' && pass === '1234') {
        const token = btoa(`${user}:${pass}`); // Simulación de JWT codificado
        document.getElementById('resultado').innerText = `Autenticado.\nToken generado (simulado): ${token}`;
    } else {
        document.getElementById('resultado').innerText = 'Credenciales incorrectas.';
    }
});
