import slugify from 'slugify';
import Category from "../model/category.model.js";

function createCategory(categories, parentId = null) {
    const categoryList = [];
    let category

    if (parentId == null) {
        category = categories.filter(cat => cat.parentId == undefined)
    } else {
        category = categories.filter(cat => cat.parentId == parentId)
    };

    for (let cat of category) {
        categoryList.push({
            _id: cat._id,
            name: cat.name,
            slug: cat.slug,
            children:createCategory(categories, cat._id)
        })
    }
    return categoryList;
}

export const addCategory = async (req, res) => {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(`${req.body.name}`)
    }
    if (req.body.parentId) { categoryObj.parentId = req.body.parentId; }
    try {
        const cat = new Category(categoryObj)
        await cat.save();
        res.status(201).json({ message: cat })
    } catch (err) {
        return res.status(400).json({
            message: err
        })

    }
}

export const getCategory = async (req, res) => {
    try {
        const categories = await Category.find({})
        if (categories) {
            const CategoryList = createCategory(categories)
            return res.status(200).json({ CategoryList })
        }

    } catch (err) {
        res.status(400).json({ err })
    }

}