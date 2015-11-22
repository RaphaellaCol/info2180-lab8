<?php
mysql_connect(
"0.0.0.0",
"raphaellacol"
);

mysql_select_db("world");

$LOOKUP = $_REQUEST['lookup'];
$ALL = $_REQUEST['all'];
# execute a SQL query on the database

if( $ALL == 'true' && $LOOKUP == ''){
  $results = mysql_query("SELECT * FROM countries;");
  // echo $results;
  
  $xml = new SimpleXMLElement($results);
  $results = $xml;
  
} else {
  
    $results = mysql_query("SELECT * FROM countries WHERE name LIKE '%$LOOKUP%';");
  
  //echo $results;
  //print $results;

}

echo $results;
// # loop through each country
 while ($row = mysql_fetch_array($results)) {
   ?>
   <li> <?php echo $row["name"]; ?>, ruled by <?php echo $row["head_of_state"]; ?> </li>
   <?php

}
?>
