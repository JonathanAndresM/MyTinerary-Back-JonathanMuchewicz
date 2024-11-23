export default (req, res, next) => {
    try {
        const user = req.user;

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Token inválido o expirado",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Token válido",
            response: {
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                photo: user.photo,
                country: user.country
            },
        });
    } catch (error) {
        next(error);
    }
};