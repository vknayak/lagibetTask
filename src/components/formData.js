import * as yup from "yup";
export const getFormStructure = (categories, subCategories, topics) => {
  const categoriesList = [];
  let categoryOptions = categories
    ? categories.forEach((eachCategory) =>
        categoriesList.push({ value: eachCategory.name, name: eachCategory.id })
      )
    : [];

  const categoriesCanSelect = categoriesList
    ? categoriesList.map((option) => option.name)
    : [];
  categoryOptions = [...categoriesList];

  const subCategoriesList = [];
  let subCategoriesOptions = subCategories
    ? subCategories.forEach((eachSubCategory) =>
        subCategoriesList.push({
          value: eachSubCategory.name,
          name: eachSubCategory.id,
        })
      )
    : [];

  const subCategoriesCanSelect = subCategoriesList
    ? subCategoriesList.map((option) => option.name)
    : [];
  subCategoriesOptions = [...subCategoriesList];

  const topicsList = [];
  let topicOptions = topics
    ? topics.forEach((eachTopic) =>
        topicsList.push({ value: eachTopic.name, name: eachTopic.id })
      )
    : [];

  const topicsCanSelect = topicsList
    ? topicsList.map((option) => option.name)
    : [];
  topicOptions = [...topicsList];

  return [
    {
      name: "name",
      type: "text",
      validation: yup
        .string()
        .required("Required"),
      customProps: {
        placeholder: "Enter Name",
        label: "Name",
      },
    },
    {
      name: "imageUrl",
      type: "text",
      validation: yup
        .string()
        .required("Required"),
      customProps: {
        placeholder: "Enter image Url",
        label: "Image Url",
      },
    },
    {
      name: "categoryId",
      type: "select",
      validation: yup
        .number()
        .typeError("Select something")
        .required("Required")
        .oneOf(categoriesCanSelect, "Please select one"),
      options: categoryOptions,
      customProps: { id: "", label: "Select a category", defaultValue: "" },
    },
    {
      name: "subCategoryId",
      type: "select",
      validation: yup
        .number()
        .typeError("Select something")
        .required("Required")
        .oneOf(subCategoriesCanSelect, "Please select one"),
      options: subCategoriesOptions,
      customProps: { id: "", label: "Select a Subcategory", defaultValue: "" },
    },
    {
      name: "topicId",
      type: "select",
      validation: yup
        .number()
        .typeError("Select something")
        .required("Required")
        .oneOf(topicsCanSelect, "Please select one"),
      options: topicOptions,
      customProps: { id: "", label: "Select a topic", defaultValue: "" },
    },
    {
      name: "startDate",
      type: "date",
      validation: yup.date().typeError("required"),
      customProps: {
        label: "pick a Start Date",
        variant: "dialog",
        inputVariant: "outlined",
      },
    },
    {
      name: "endDate",
      type: "date",
      validation: yup.date().typeError("required"),
      customProps: {
        label: "pick a End Date",
        variant: "dialog",
        inputVariant: "outlined",
      },
    },
  ];
};
