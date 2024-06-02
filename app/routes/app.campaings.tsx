import {
  Box,
  Button,
  Card,
  InlineGrid,
  Layout,
  Page,
  Tabs,
  Text,
} from "@shopify/polaris";
import { useCallback, useState } from "react";
import { tabs } from "~/utils/tabs";
import CreateCampaingForm from "./app,createcampaingform";

const Campaings = () => {
  const [selected, setSelected] = useState<number>(0);
  const [activate, setActivate] = useState<boolean>(false);

  const handleChange = useCallback(
    () => setActivate((prevActivate) => !prevActivate),
    [],
  );

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    [],
  );

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <InlineGrid columns={2}>
            <Text variant="heading3xl" as="h2">
              Campaings
            </Text>
            <Button onClick={handleChange}>Create new</Button>
          </InlineGrid>
        </Layout.Section>
        <Layout.Section>
          <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
            <Card>
              <Text as="h2" variant="headingSm">
                {tabs[selected].content}
              </Text>
              <Box paddingBlockStart="200">
                <Text as="h2" variant="headingSm">
                  {tabs[selected].component}
                </Text>
              </Box>
            </Card>
          </Tabs>
        </Layout.Section>
        <Layout.Section>
          <CreateCampaingForm activate={activate} onClose={handleChange} />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Campaings;
