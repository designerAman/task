let formBtn = $(".formBtn");

formBtn.click(function () {

    $(".loginBtn").hide();
    $(".loading").css("display", "inline-block")

    setTimeout(function(){
        $(".loginBtn").show();
        $(".loading").hide();
    
        let email = $("#email").val();
        let password = $("#password").val();
        if (email === "" && password === "") {
            $(".errMail").css("display", "initial");
            $(".errPass").css("display", "initial");
            $(".entrMail").css("display", "initial");
            $(".entrPass").css("display", "initial");
        } else if (email === "") {
            $(".errMail").css("display", "initial");
            $(".entrMail").css("display", "initial");
        } else if (password === "") {
            $(".errPass").css("display", "initial");
            $(".entrPass").css("display", "initial");
        }
        if (email !== "" && password !== "") {
            $(".errMail").css("display", "initial");
            $(".wrngMail").css("display", "initial");
            $(".errPass").css("display", "initial");
            $(".wrngPass").css("display", "initial");
        }
    }, 1000)
})