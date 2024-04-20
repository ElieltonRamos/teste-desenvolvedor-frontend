import JsFileDownloader from "js-file-downloader";
import Swal from "sweetalert2";

const downloadFile = (url: string, fileName: string) => {
  fetch(url, { mode: 'no-cors' })
    .then(response => response.blob())
    .then((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      new JsFileDownloader({ url: blobUrl, filename: fileName })})
    .then(() => Swal.fire('Download concluído!'))
    .catch(() => Swal.fire('Erro ao baixar o arquivo!'));
};

export default downloadFile;