const compose = (...fns) => x =>
    fns.reduceRight((v, f) => f(V), x);
const pipe = (...fns) => x =>
    fns.reduce((v, f) => f(v), x);