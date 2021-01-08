function addUser(){
    player_1name=document.getElementById("login_input_1").value;
    player_2name=document.getElementById("login_input_2").value;


    localStorage.setItem("player1_name",player_1name);

    localStorage.setItem("player2_name",player_2name);

    window.location.replace("enter_number.html");
}