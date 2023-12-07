import {UserDashboardLayout} from "layouts/dashboard/userDashboardLayout";
import {MemoryGrid} from "layouts/memory/MemoryGrid";

const data = [
    {
        title:"titre1",
        desc: "desc1"
    },
    {
        title:"titre2",
        desc:"desc2"
    },
    {
        title:"titre3",
        desc:"desc3"
    },
    {
        title:"titre4",
        desc:"desc4"
    },
    {
        title:"titre1",
        desc: "desc1"
    },
    {
        title:"titre2",
        desc:"desc2"
    },
    {
        title:"titre3",
        desc:"desc3"
    },
    {
        title:"titre4",
        desc:"desc4"
    },
    {
        title:"titre1",
        desc: "desc1"
    },
    {
        title:"titre2",
        desc:"desc2"
    },
    {
        title:"titre3",
        desc:"desc3"
    },
    {
        title:"titre4",
        desc:"desc4"
    },
    {
        title:"titre1",
        desc: "desc1"
    },
    {
        title:"titre2",
        desc:"desc2"
    },
    {
        title:"titre3",
        desc:"desc3"
    },
    {
        title:"titre4",
        desc:"desc4"
    }]

export const MemoryMainPage = () => {
    return (
        <UserDashboardLayout>
            <div className="p-4 mt-14 bg-blue-100">
            <MemoryGrid
                cards = {data}>
            </MemoryGrid>
            </div>
        </UserDashboardLayout>
    )
}