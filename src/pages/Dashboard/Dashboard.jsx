import React from 'react'

// Mantine Tabs
import { Tabs, rem } from '@mantine/core';
import AnomaliesTab from '../../components/AnomaliesTab/AnomaliesTab';
import SiteInfoTab from '../../components/SiteInfoTab/SiteInfoTab';
import ReportTab from '../../components/ReportTab/ReportTab';
import DashboardTab from '../../components/DashboardTab/DashboardTab';





const Dashboard = () => {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <div className='p-10 w-full h-screen overflow-auto'>
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