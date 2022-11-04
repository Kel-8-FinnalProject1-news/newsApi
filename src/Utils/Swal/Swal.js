import swal from 'sweetalert2'

const Swal = () => {
   const SwalSucces = () =>{
        swal.fire({
            icon: 'success',
            title: "success saved",
        })
    }
    const SwalRemove = () =>{
        swal.fire({
            icon: 'success',
            title: 'Remove Success',
        })
    }
    return {SwalSucces, SwalRemove}
}

export {Swal}