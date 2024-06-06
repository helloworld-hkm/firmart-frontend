




import { Button, buttonVariants } from "@/components/ui/button.jsx";
// import "./index.css";
// import { CardSection } from './CardSection';
import Range from './Range';
import  CardSection  from './CardSection.jsx';

const Sidebar = () => {
    const types = [
        {
          name: "makanan",
        },
        {
          name: "minuman",
        },
        {
          name: "peralatan",
        },
      ];
  return (
    <>
     <CardSection title="Tools">
            <div className="flex flex-col mt-3 gap-[1rem]">
              <div>
                <h1 className="mb-2 text-xl font-medium">Sort by :</h1>
                <div className="flex flex-wrap gap-2">
                  <Button
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                  >
                    Item Name
                  </Button>
                  <Button
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                  >
                    Transaction Date
                  </Button>
                </div>
              </div>
              <div>
                <h1 className="mb-2 text-xl font-medium">Type :</h1>
                <div className="flex flex-wrap gap-2">
                  {types.map((i) => (
                    <Button key={i.id}
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                      })}
                    >
                      Makanan
                    </Button>
                  ))}

                  <Button
                    className={buttonVariants({
                      variant: "primary",
                      size: "sm",
                    })}
                  >
                    +
                  </Button>
                </div>
              </div>
              <h1 className="mb-2 text-xl font-medium">Range :</h1>
              <Range />
            </div>
          </CardSection>
    </>
  )
}

export default Sidebar