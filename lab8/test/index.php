<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $url = "http://10.0.15.20/lab8/restapis/superheroes";
    $response = file_get_contents($url);
    $result = json_decode($response);

    echo "Squad Name : $result->squadName<br>";
    echo "Home Town : $result->homeTown<br>";
    foreach ($result->members as $member) {
        echo "Hero Name : $member->name<br>";  
        echo "Hero age : $member->age<br>";
        echo "Identity : $member->secretIdentity<br>";
        echo "&nbsp;&nbsp Power<br>";
        foreach ($member->powers as $power){
            echo "$power<br>";
        }
    }
    ?>
</body>

</html>