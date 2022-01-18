import sanitizer from 'validator';
import jwt from 'jsonwebtoken';

var messageList = [
    {
      author: "たろう",
      date: "2021/12/10 16:30",
      title: "無事です。避難所にいます。",
      description: "今日はトイレが使えました",
      certified: true
    },
    {
      author: "ちえ",
      date: "2021/12/12 17:30",
      title: "無事です。避難所にいます。",
      description: "炊き出しでご飯が食べられました",
      certified: false
    },
];

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            res.status(200).json(messageList);
            break;
        case 'PUT':
            var message = {
                author: sanitizer.escape(req.body.author),
                date:   sanitizer.escape(req.body.date),
                title:  sanitizer.escape(req.body.title),
                description: sanitizer.escape(req.body.description),
            };
            if (req.headers['x-crl-pop'] && req.headers['x-crl-token']) {
                try {
                    jwt.verify(req.headers['x-crl-token'], process.env.JWT_SHARED_KEY);
                    message.certified = true;
                } catch (err) {
                    message.certified = false;
                }
            } else {
                message.certified = false;
            };
            messageList.push(message);

            res.status(200).json(messageList);
            break;
        default:
            res.status(405).send('method not allowed');
            break;
    };
}