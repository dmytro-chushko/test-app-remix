import type { ActionFunction } from "@remix-run/node";
import { Form, useActionData, useSubmit } from "@remix-run/react";
import {
  Button,
  Frame,
  Layout,
  Modal,
  Page,
  TextField,
} from "@shopify/polaris";
import { useCallback, useState } from "react";

interface ICreateCampaingFormProps {
  activate: boolean;
}

export const action: ActionFunction = async ({ request }) => {};

const CreateCampaingForm = ({}: ICreateCampaingFormProps) => {
  const [activate, setActivate] = useState<boolean>(false);

  const handleChange = useCallback(
    () => setActivate((prevActivate) => !prevActivate),
    [],
  );

  const activator = <Button onClick={handleChange}>Open</Button>;

  const [value, setValue] = useState<string>("default");

  const handleChangeText = useCallback(
    (newValue: string) => setValue(newValue),
    [],
  );

  const submit = useSubmit();
  const actionData = useActionData<typeof action>();

  console.log(actionData);

  const sendEmails = () => submit({}, { replace: true, method: "POST" });

  return (
    <Page>
      <Frame>
        <Modal
          activator={activator}
          open={activate}
          onClose={handleChange}
          title="Create a new Email Campaing"
          primaryAction={{ content: "Send", onAction: () => {} }}
          secondaryActions={[
            {
              content: "Finish Later",
              onAction: sendEmails,
            },
          ]}
        >
          <Modal.Section>
            <Form>
              <Layout>
                <Layout.Section>
                  <TextField
                    label="Compaing Name"
                    value={value}
                    onChange={handleChangeText}
                    autoComplete="off"
                  />
                  <TextField
                    label="Campaing Name"
                    value={value}
                    onChange={handleChangeText}
                    autoComplete="off"
                  />
                  <TextField
                    label="Corporation"
                    value={value}
                    onChange={handleChangeText}
                    autoComplete="off"
                  />
                  <TextField
                    label="From"
                    value={value}
                    onChange={handleChangeText}
                    autoComplete="off"
                  />
                  <TextField
                    label="Content"
                    value={value}
                    onChange={handleChangeText}
                    autoComplete="off"
                  />
                  <Button submit>send</Button>
                </Layout.Section>
              </Layout>
            </Form>
          </Modal.Section>
        </Modal>
      </Frame>
    </Page>
  );
};

export default CreateCampaingForm;
