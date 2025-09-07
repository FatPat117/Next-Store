import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { faker } from "@faker-js/faker";

const AdminCreateProductAction = async (formdata: FormData) => {
        "use server";
        const name = formdata.get("name") as string;
        console.log(name);
};

const AdminCreateProductPage = () => {
        const name = faker.commerce.productName();
        const company = faker.company.name();
        const description = faker.lorem.paragraph({ min: 10, max: 15 });
        return (
                <section>
                        <h1 className="text-2xl font-semibold mb-8 capitalize">Create Product</h1>
                        <div className="border p-8 rounded-md">
                                <form action={AdminCreateProductAction}>
                                        <FormInput name="name" type="text" defaultValue={name} label="product name" />
                                        <Button type="submit" size="lg">
                                                Submit
                                        </Button>
                                </form>
                        </div>
                </section>
        );
};

export default AdminCreateProductPage;
