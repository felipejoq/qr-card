import { qrGenerator } from './helpers/qr.generator';
import './style.css'
const qrCodeArea = document.getElementById('qrCodeArea');

qrGenerator('https://uncodigo.com/', qrCodeArea);

