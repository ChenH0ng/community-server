export default ({failed, data, e}, res, fail, map) => {
    if (e) res.json({error: 400});
    else if (failed) {
        console.log(fail);
        res.json({error: fail});
    }
    else if (data) {
        res.json({data: map(data)});
    }
    else {
        res.json({});
    }
}