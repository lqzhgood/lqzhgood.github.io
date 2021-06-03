$(document).ready(function () {
    function card(name, suit, value) {
        this.name = name;
        this.suit = suit;
        this.value = value;
    }


    var decknameArr = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    var decksuitArr = ["Hearts", "Diamonds", "Clubs", "Spades"];
    var deckvalueArr = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    var deckArr = [];

    for (i = 0; i < 52; i++) {
        var name = decknameArr[i % decknameArr.length];
        var suit = decksuitArr[i % decksuitArr.length];
        var value = deckvalueArr[i % deckvalueArr.length];
        deckArr[i] = new card(name, suit, value);
    }

    var deck = deckArr;

//    var deck = [
//       new card('Ace', 'Hearts', 11)    
//        , new card('Two', 'Hearts', 2)   
//        , new card('Three', 'Hearts', 3)    
//        , new card('Four', 'Hearts', 4)    
//        , new card('Five', 'Hearts', 5)    
//        , new card('Six', 'Hearts', 6)    
//        , new card('Seven', 'Hearts', 7)    
//        , new card('Eight', 'Hearts', 8)    
//        , new card('Nine', 'Hearts', 9)    
//        , new card('Ten', 'Hearts', 10)    
//        , new card('Jack', 'Hearts', 10)    
//        , new card('Queen', 'Hearts', 10)    
//        , new card('King', 'Hearts', 10)    
//        , new card('Ace', 'Diamonds', 11)    
//        , new card('Two', 'Diamonds', 2)    
//        , new card('Three', 'Diamonds', 3)    
//        , new card('Four', 'Diamonds', 4)    
//        , new card('Five', 'Diamonds', 5)    
//        , new card('Six', 'Diamonds', 6)    
//        , new card('Seven', 'Diamonds', 7)    
//        , new card('Eight', 'Diamonds', 8)    
//        , new card('Nine', 'Diamonds', 9)    
//        , new card('Ten', 'Diamonds', 10)    
//        , new card('Jack', 'Diamonds', 10)    
//        , new card('Queen', 'Diamonds', 10)    
//        , new card('King', 'Diamonds', 10)    
//        , new card('Ace', 'Clubs', 11)    
//        , new card('Two', 'Clubs', 2)    
//        , new card('Three', 'Clubs', 3)    
//        , new card('Four', 'Clubs', 4)    
//        , new card('Five', 'Clubs', 5)    
//        , new card('Six', 'Clubs', 6)    
//        , new card('Seven', 'Clubs', 7)    
//        , new card('Eight', 'Clubs', 8)    
//        , new card('Nine', 'Clubs', 9)    
//        , new card('Ten', 'Clubs', 10)    
//        , new card('Jack', 'Clubs', 10)    
//        , new card('Queen', 'Clubs', 10)    
//        , new card('King', 'Clubs', 10)    
//        , new card('Ace', 'Spades', 11)    
//        , new card('Two', 'Spades', 2)    
//        , new card('Three', 'Spades', 3)    
//        , new card('Four', 'Spades', 4)    
//        , new card('Five', 'Spades', 5)    
//        , new card('Six', 'Spades', 6)    
//        , new card('Seven', 'Spades', 7)    
//        , new card('Eight', 'Spades', 8)    
//        , new card('Nine', 'Spades', 9)    
//        , new card('Ten', 'Spades', 10)    
//        , new card('Jack', 'Spades', 10)    
//        , new card('Queen', 'Spades', 10)    
//        , new card('King', 'Spades', 10)
//    ];


    var hand = {
        cards: new Array()
        , total: 0
        , sumTotal: function () {
            this.total = 0;
            for (var i = 0; i < this.cards.length; i++) {
                this.total += this.cards[i].value;
            }
            $("#hdrTotal").html("Total:" + this.total);
            if (this.total > 21) {
                $("#btnStick").trigger("click");
                $("#hdrResult").html("BUST!").attr("class", "lose");
                $("#imgResult").attr('src', 'images/x2.png');
            } else if (this.total == 21) {
                $("#btnStick").trigger("click");
                $("#hdrResult").html("BlackJack").attr("class", "win");
                $("#imgResult").attr('src', 'images/check.png');
            } else if (this.total <= 21 && this.cards.length == 5) {
                $("#btnStick").trigger("click");
                $("#hdrResult").html("BlackJack - 5card").attr("class", "win");
                $("#imgResult").attr('src', 'images/check.png');
            } else {

            }
        }
    };


    var user_card = [];

    function startTwo() {
        faPai();
        faPai();
    }

    function faPai() {
        do {
            var flag = true;
            var index = Math.floor(Math.random() * 52);
            if ($.inArray(index, user_card) == -1) {
                flag = false;
                user_card[user_card.length] = index;
                var c = deck[index];
                hand.cards[hand.cards.length] = c;
                var $d = $("<div>").addClass("current_hand").appendTo("#my_hand");

                $("<img>").attr("src", "images/cards/" + c.suit + "/" + c.name + ".jpg").appendTo($d).fadeOut("slow").fadeIn("slow");
            }
        } while (flag);
        hand.sumTotal();
    }

    $("#btnDeal").click(function () {
        startTwo();
        $(this).toggle();
        $("#btnHit").toggle();
        $("#btnStick").toggle();
    });

    $("#btnHit").click(function () {
        faPai();
    });

    $("#btnStick").click(function () {
        $("#hdrResult").html("stick!").attr("class", "win");
        $("#result").toggle();
        end();
    });

    $("#btnRestart").click(function () {
        $(this).toggle();
        $("#result").toggle();
        $("#my_hand").empty();
        $("#hdrResult").html("");

        hand.cards = [];
        user_card = [];

        $("#btnDeal").toggle().trigger("click");
    });

    function end() {
        $("#btnHit").toggle();
        $("#btnStick").toggle();
        $("#btnRestart").toggle();
    }

});