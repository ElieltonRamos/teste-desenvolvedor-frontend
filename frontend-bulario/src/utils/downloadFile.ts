import JsFileDownloader from "js-file-downloader";

const downloadFile = (url: string, fileName: string) => {
  fetch(url, { mode: 'no-cors' })
    .then(response => response.blob())
    .then((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      new JsFileDownloader({
        url: blobUrl,
        filename: fileName
      })
    })
    .then(() => window.alert('Download concluído!'))
    .catch(() => window.alert('Erro ao baixar o arquivo!'));
};

export default downloadFile;