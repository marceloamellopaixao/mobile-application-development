function fatorial(num: number): number{
    if (num <= 1) return 1;
    return num * fatorial(num - 1);
}

console.log(fatorial(5)); // 120