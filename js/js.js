/**
 * Created by toorel on 7/22/2015.
 */

var str_1 = '0';
var str_2 = '0';
var result = 0;
var dece = null;

function add_number(str_press){
    if(dece == null){
        str_1 = str_1 + str_press;
        document.getElementById('dis').innerHTML = parseFloat(str_1);
    }
    else{
        str_2 = str_2 + str_press;
        document.getElementById('dis').innerHTML = parseFloat(str_2);
    }
}

function add(){
    //result = result + parseFloat(str);
    //str ='0';
    dece = '+';
    document.getElementById('dis').innerHTML = dece;
}
function minus(){
    //result = result - parseFloat(str);
    //document.getElementById('dis').innerHTML = result;
    //str = '0';
    dece = '-';
    document.getElementById('dis').innerHTML = dece;

}
function divition(){
    //result = result / parseFloat(str);
    //document.getElementById('dis').innerHTML = result;
    //str = '0';
    dece = '/';
    document.getElementById('dis').innerHTML = dece;
}
function multi(){
    //if(result == 0){
    //    result = 1;
    //}
    //result = result * parseFloat(str);
    //document.getElementById('dis').innerHTML = result;
    //str = '0';
    dece = '*';
    document.getElementById('dis').innerHTML = dece;

}

function ans(){
    if(dece == '+'){
        result = parseFloat(str_1) + parseFloat(str_2);
        document.getElementById('dis').innerHTML = result;
    }
    else if(dece == '-'){
        result = parseFloat(str_1) - parseFloat(str_2);
        document.getElementById('dis').innerHTML = result;
    }
    else if(dece == '*'){
        result = parseFloat(str_1) * parseFloat(str_2);
        document.getElementById('dis').innerHTML = result;
    }
    else if(dece == '/'){
        result = parseFloat(str_1) / parseFloat(str_2);
        document.getElementById('dis').innerHTML = result;
    }
}

function all_clear(){
    str_1 = '0';
    str_2 = '0';
    result = 0;
    dece = null;
    document.getElementById('dis').innerHTML = 'AC';
}