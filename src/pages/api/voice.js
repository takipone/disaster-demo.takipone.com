export default function handler(req, res) {
//    if (req.method === 'POST') {
        const crl_pop = req.headers.x-crl-pop;
        const crl_token = req.headers.x-crl-token;
        res.status(200).json({
            pop: crl_pop,
            token: crl_token
        });
//    } else {
//        res.status(405).send('method not allowed');
//    }

}