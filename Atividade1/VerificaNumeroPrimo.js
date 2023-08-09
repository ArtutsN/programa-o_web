function NumPrimo(Num) {
    if (Num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(Num); i++) {
        if (Num % i === 0) {
            return false;
        }
    }

    return true;
}

let Num = 15;

if (NumPrimo(Num)) {
    console.log(Num + " Primo");
}else{
    console.log(Num + " Não é Primo");
}