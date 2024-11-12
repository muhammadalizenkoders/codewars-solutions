function dblLinear(n) {
    let u = [1];
    let index2 = 0;
    let index3 = 0;

    while (u.length <= n) {
        let next2 = 2 * u[index2] + 1;
        let next3 = 3 * u[index3] + 1;
      
        if (next2 < next3) {
            u.push(next2);
            index2++;
        } else if (next2 > next3) {
            u.push(next3);
            index3++;
        } else {
            u.push(next2);
            index2++;
            index3++;
        }
    }

    return u[n];
}