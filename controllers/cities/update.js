import City from "../../models/City.js";

export const updateById = {
    update: async (req, res, next) => {
        try {
            // Busca y actualiza un documento por su ID, devolviendo el documento modificado
            const updatedCity = await City.findByIdAndUpdate(
                req.params._id, // ID del documento a buscar y actualizar
                req.body,      // Modificaciones a realizar
                { new: true, runValidators: true } // Retorna el documento modificado y aplica validaciones de modelo
            );

            if (updatedCity) {
                return res.status(200).json({ response: updatedCity });
            } else {
                return res.status(404).json({ response: 'City not found' });
            }
        } catch (error) {
            next(error);
        }
    }
};
