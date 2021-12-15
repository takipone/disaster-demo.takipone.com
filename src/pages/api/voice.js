export default function handler(req, res) {
//    if (req.method === 'POST') {
        const crlPop = req.headers['x-crl-pop'];
        const crlToken = req.headers['x-crl-token'];
        res.status(200).json({
            pop: crlPop,
            token: crlToken
        });
//    } else {
//        res.status(405).send('method not allowed');
//    }

}