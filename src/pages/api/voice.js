export default function handler(req, res) {
//    if (req.method === 'POST') {
        const crl_pop = req.get('X-Crl-Pop');
        const crl_token = req.get('X-Crl-Token');
        res.status(200).json({
            pop: crl_pop,
            token: crl_token
        });
//    } else {
//        res.status(405).send('method not allowed');
//    }

}