import { Button, buttonVariants } from "@/components/ui/button.jsx";
// import "./index.css";
// import { CardSection } from './CardSection';
import Range from "./Range";
import CardSection from "./CardSection.jsx";
import { useEffect, useState } from "react";
import api from "@/services/api";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, NavLink, useParams } from "react-router-dom";
import FilterButton from "./FilterButton";
import SelectTypes from "./SelectType";
const Sidebar = () => {
    
  const [types, setTypes] = useState();
  const [inputType, setInputType] = useState();
  const [loading, setLoading] = useState(true);
  const [type,setType]=useState()
  useEffect(() => {
    
    api
      .getTypes()
      .then((result) => {
        setTypes(result.data);
        console.log(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <CardSection title="Tools" home={true}>
        <div className="flex flex-col mt-3 gap-[1rem]">
          <div>
            <h1 className="mb-2 text-xl font-medium">Sort by :</h1>
            <div className="flex flex-wrap gap-2">
              {loading ? (
                <div className="flex flex-wrap  gap-2 justify-start items-center ">
                  <div className="">
                    <Skeleton className="h-[2.5rem] w-[90px]" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-[2.5rem] w-[110px]" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-[2.5rem] w-[110px]" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-[2.5rem] w-[50px]" />
                  </div>
                </div>
              ) : (
                <>
                  {/* <NavLink to={"/sort/name"}>
                    {({ isActive, isPending, isTransitioning }) =>
                      isActive ? (
                        <Button
                          className={buttonVariants({
                            variant: "primary",
                            size: "sm",
                          })}
                        >
                          Item Name
                        </Button>
                      ) : (
                        <Button
                          className={buttonVariants({
                            variant: "outline",
                            size: "sm",
                          })}
                        >
                          Item Name
                        </Button>
                      )
                    }
                  </NavLink> */}
                  <FilterButton url={"/sort/name"} label={"Items Name"} />
                  <FilterButton url={"/sort/date"} label={"Transaction Date"} />
                 
                    
                  
                 
                </>
              )}
            </div>
          </div>

          <div>
            <h1 className="mb-2 text-xl font-medium">Type :</h1>
            <div className="flex flex-wrap gap-2">
              {loading ? (
                <div className="flex flex-wrap  gap-2 justify-start items-center ">
                  <div className="">
                    <Skeleton className="h-[2.5rem] w-[90px]" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-[2.5rem] w-[110px]" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-[2.5rem] w-[110px]" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-[2.5rem] w-[50px]" />
                  </div>
                </div>
              ) : (
                <>
                  {types.map((i) => (
                      <FilterButton key={i.id} url={`/type/${i.name}`} setType={setType} label={i.name}/>
                  ))}
                  {/* <Button
                    className={buttonVariants({
                      variant: "primary",
                      size: "sm",
                    })}
                  >
                    +
                  </Button> */}
                </>
              )}
            </div>
          </div>
          <h1 className="mb-2 text-xl font-medium">Filter :</h1>
          {loading ? (
            <div className="flex flex-wrap  gap-2 justify-start items-center ">
              <div className="">
                <Skeleton className="h-[2.5rem] w-[270px]" />
              </div>
              <div className="">
                <Skeleton className="h-[2.5rem] w-[270px]" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-[3rem] w-[270px]" />
              </div>
            </div>
          ) : (
            <>
            {/* <SelectTypes setInputType={setInputType}/> */}
            <Range  />
            </>
          )}
        </div>
      </CardSection>
    </>
  );
};

export default Sidebar;
