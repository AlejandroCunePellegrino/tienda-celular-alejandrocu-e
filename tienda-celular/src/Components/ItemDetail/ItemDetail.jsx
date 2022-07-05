import React from "react";
import ItemDetailcss from './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = () => {
    return(
        <div className="box">
            <div className="box-img">
                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_686795-MLA45385092412_032021-F.webp" alt="a12" className="img-a12" />
            </div>
            <div className="box-detail">
                <h5>Samnsung Galaxy A12 64 GB negro 4 GB RAM</h5>
                <p>Dispositivo liberado para que elijas la compañía telefónica que prefieras.
                    |Pantalla PLS de 6.5".
                    |Tiene 4 cámaras traseras de 48Mpx/5Mpx/2Mpx/2Mpx.
                    |Tiene 4 cámaras traseras de 48Mpx/5Mpx/2Mpx/2Mpx.
                    |Procesador MediaTek MT6765 Helio P35 Octa-Core de 2.3GHz con 4GB de RAM.
                    |Batería de 5000mAh.
                    |Memoria interna de 64GB.
                </p>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetail;