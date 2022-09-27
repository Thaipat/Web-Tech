<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab7/1</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap" rel="stylesheet">
</head>
<style>
    * {
        font-family: 'Prompt', sans-serif;
    }

    table th {
        border-bottom: 1px solid black;
        padding: 10px 50px 0px 0px;
    }

    table {
        border-collapse: collapse;
    }
</style>

<body>
    <form action="index.php" method="POST">
        <b>กรอกสูตรคูณ : </b>
        <input type="text" id="number" name="number">
        <input type="submit" id="submit" value="แสดงตาราง">
    </form>

    <?php
    if (isset($_POST['number'])) {
        $number = $_POST['number'];
        $v = intval($number);
        echo "<h3>ตารางสูตรคูณแม่ $number</h3><table>";
        for ($i = 1; $i <= 12; $i++) {
            echo "<tr><th>$i</th><th>x</th><th>$v</th><th>=</th><th>" . $i * $v . "</th></tr>";
        }
        echo "</table>";
    }
    ?>
</body>

</html>