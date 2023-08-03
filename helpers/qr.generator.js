import QRCode from 'qrcodejs';

export const qrGenerator = (text, element) => {
    const matrix = QRCode.generate(text);
    const qrUri = QRCode.render('svg', matrix);
    element.innerHTML = qrUri;
}
