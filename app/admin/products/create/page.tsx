import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextareaInput";
import { createProductAction } from "@/utils/action";
import { faker } from "@faker-js/faker";

const AdminCreateProductPage = () => {
        const name = faker.commerce.productName();
        const company = faker.company.name();
        const description = faker.lorem.paragraph({ min: 10, max: 15 });
        return (
                <section>
                        <h1 className="text-2xl font-semibold mb-8 capitalize">Create Product</h1>
                        <div className="border p-8 rounded-md">
                                <FormContainer action={createProductAction}>
                                        <div className="grid gap-4 md:grid-cols-2 my-4">
                                                <FormInput
                                                        type="text"
                                                        name="name"
                                                        label="Product Name"
                                                        defaultValue={name}
                                                />
                                                <FormInput
                                                        type="text"
                                                        name="company"
                                                        label="Company"
                                                        defaultValue={company}
                                                />

                                                <PriceInput />
                                                <ImageInput />
                                        </div>

                                        <TextAreaInput
                                                name="description"
                                                label="Product Description"
                                                defaultValue={description}
                                        />

                                        {/* Checkbox Input */}
                                        <div className="mt-6">
                                                <CheckboxInput name="featured" label="Featured" />
                                        </div>

                                        <SubmitButton text="create product" className="mt-8" />
                                </FormContainer>
                        </div>
                </section>
        );
};

export default AdminCreateProductPage;
