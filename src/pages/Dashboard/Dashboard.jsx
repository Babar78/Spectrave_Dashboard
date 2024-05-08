import React from 'react'

// Mantine Tabs
import { Tabs } from '@mantine/core';
import AnomaliesTab from '../../components/AnomaliesTab/AnomaliesTab';
import SiteInfoTab from '../../components/SiteInfoTab/SiteInfoTab';
import ReportTab from '../../components/ReportTab/ReportTab';
import DashboardTab from '../../components/DashboardTab/DashboardTab';





const Dashboard = () => {

  return (
    <div className='p-10 w-full overflow-hidden'>
      <Tabs variant="outline" defaultValue="dashboard">
        <Tabs.List>
          <Tabs.Tab value="dashboard">
            Dashboard
          </Tabs.Tab>
          <Tabs.Tab value="siteInfo">
            Site Info
          </Tabs.Tab>
          <Tabs.Tab value="anomalies">
            Anomalies
          </Tabs.Tab>
          <Tabs.Tab value="report">
            Report
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="dashboard" p={10}>
          <DashboardTab />
        </Tabs.Panel>

        <Tabs.Panel value="siteInfo" p={10}>
          <SiteInfoTab />
        </Tabs.Panel>

        <Tabs.Panel value="anomalies" p={10}>
          <AnomaliesTab />
        </Tabs.Panel>

        <Tabs.Panel value="report" p={10} className='h-[80vh] flex justify-center items-center'>
          <ReportTab />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default Dashboard