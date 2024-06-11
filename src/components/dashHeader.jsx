
const DashboardHeader = () => {
    return(
        <div className="flex items-center gap-6">
          <img src=".\public\images\admin.png" alt="admin" className="mt-4"/>
          <div className="flex gap-6 items-center mt-4">
            <div className="flex flex-col">
                <h3 className="font-semibold">Elvin</h3>
                <p className="text-xs">Admin</p>
            </div>
            <img src=".\public\images\arrow-down-icon.png" alt="arrow-down"/>
          </div>
          <img src=".\public\images\notification-icon.png" alt="notification-icon" className="mt-4"/>
        </div>
    )
}

export default DashboardHeader