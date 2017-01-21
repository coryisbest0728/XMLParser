/**
 * @file XML parse testing
 *
 * @author Cory(https://github.com/coryisbest0728)
 */

import { IXMLParser } from 'cory/xml/IXMLParser';
import { NormalXMLParser } from 'cory/xml/NormalXMLParser';
import 'reflect-metadata';

describe('XML Parser Test', (): void => {

    beforeAll((): void => {});

    it('Parse xml string to the document object', (done: DoneFn): void => {
        let parser: IXMLParser = new NormalXMLParser();
        parser.parse(`
            <Form xmlns="cory/components/form"
                xmlns:m="cory/components/mobile"
                xmlns:l="cory/components/layout"
                xmlns:card="xxx/bank/card">
                <TextBox></TextBox>
                <Button></Button>
                <m:List>
                    <m:UISwitch></m:UISwitch>
                </m:List>
                <l:Panel>
                    <l:VGroup>
                        <TextBox></TextBox>
                        <RadioButton></RadioButton>
                        <SubmitButton></SubmitButton>
                    </l:VGroup>
                    <l:ScrollPanel>
                        <l:HGroup>
                            <card:CreditCard></card:CreditCard>
                            <card:CreditCard></card:CreditCard>
                            <card:DebitCard></card:DebitCard>
                            <card:DebitCard></card:DebitCard>
                            <card:DebitCard></card:DebitCard>
                            <card:DebitCard></card:DebitCard>
                        </l:HGroup>
                    </l:ScrollPanel>
                </l:Panel>
            </Form>
        `).then((xml: Document): void => {
            expect(xml).not.toBeNull('The document parsed should have value.');
            expect(xml.childNodes.length).toBe(1, 'The children of xml document only has 1 node Form');
            let form: Element = <Element>xml.childNodes.item(0);
            expect(form.childNodes.length).toBe(4, 'The children of form node has 3 nodes');
            expect(form.localName).toBe('Form');
            expect(form.namespaceURI).toBe('cory/components/form');
            let uiswitch: Element = <Element>form.childNodes.item(2).childNodes.item(0);
            expect(uiswitch.localName).toBe('UISwitch');
            expect(uiswitch.prefix).toBe('m');
            expect(uiswitch.namespaceURI).toBe('cory/components/mobile');
            let scrollPanel: Element = <Element>form.childNodes.item(3).childNodes.item(1);
            expect(scrollPanel.localName).toBe('ScrollPanel');
            expect(scrollPanel.prefix).toBe('l');
            expect(scrollPanel.namespaceURI).toBe('cory/components/layout');
            let debitCard: Element = <Element>scrollPanel.childNodes.item(0).childNodes.item(3);
            expect(debitCard.localName).toBe('DebitCard');
            expect(debitCard.prefix).toBe('card');
            expect(debitCard.namespaceURI).toBe('xxx/bank/card');
            done();
        });
    });

    afterAll((): void => {});
});