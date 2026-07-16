import { getTaxonomyService } from "./taxonomy.service.js";


export const getTaxonomyList = async (req, res) => {
    try {
        const fetchTaxonomyList = await getTaxonomyService();

        return res.status(200).json({
            success: true,
            message: "Taxonomy List fetched successfully",
            data: fetchTaxonomyList
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};