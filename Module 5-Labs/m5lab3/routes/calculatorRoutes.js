






<body>
    <label>Number #1: <input id="num1" type="number"></label>
    <label>Number #1: <input id="num1" type="number"></label><br><br>

    <div>
        <button onclick="getResult('add')">Add!</button>
        <button onclick="getResult('add')">Subtract!</button>
        <button onclick="getResult('add')">Multiply!</button>
        <button onclick="getResult('add')">Divide!</button>
    </div>
    <br>

    <div>Result
        <span id="result"></span>
    </div>
</body>

<script>
    function getResult(operationRoute) {
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;

        fetch(`/calculator/${operationRoute}?num1=${num1}&num2=${num2}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("result").innerHTML = data.result;
            })

    }
</script>

</html>