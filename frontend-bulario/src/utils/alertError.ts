import Swal from "sweetalert2";

function alertError(error: string) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: error,
    footer: '<a href="javascript:location.reload()">Que tal recarregar a página?</a>'
  });
}

export default alertError;