import React, { useState } from 'react'

// Mantine Tabs
import { Select } from '@mantine/core';
import { Tabs } from '@mantine/core';
import AnomaliesTab from '../../sections/Dashboard/AnomaliesTab/AnomaliesTab';
import SiteInfoTab from '../../sections/Dashboard/SiteInfoTab/SiteInfoTab';
import ReportTab from '../../sections/Dashboard/ReportTab/ReportTab';
import DashboardTab from '../../sections/Dashboard/DashboardTab/DashboardTab';

const Dashboard = () => {

  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <>
      <div className='p-10 w-full sm:block hidden'>
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

      <div className='sm:hidden block p-10 space-y-10'>
        <Select
          value={activeTab}
          data={['Dashboard', 'Site Info', 'Anomalies', 'Report']}
          onChange={(value) => setActiveTab(value)}
        />
        {activeTab === 'Dashboard' && <DashboardTab />}
        {activeTab === 'Site Info' && <SiteInfoTab />}
        {activeTab === 'Anomalies' && <AnomaliesTab />}
        {activeTab === 'Report' && <ReportTab />}
      </div>
    </>
  );
}

export default Dashboard