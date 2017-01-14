/**
 * @file XML parse testing
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { IXMLParser } from 'cory/xml/IXMLParser';
import { NormalXMLParser } from 'cory/xml/NormalXMLParser';
import 'reflect-metadata';

describe('XML Parser Test', (): void => {

    beforeAll((): void => {});

    it('Parse xml string to the document object', (done: DoneFn): void => {
        let parser: IXMLParser = new NormalXMLParser();
        parser.parse(`
            <f:Form xmlns:f="cory/components/form"
                xmlns:m="cory/components/mobile">
                <f:TextBox></f:TextBox>
                <f:Button></f:Button>
                <m:List>
                    <m:UISwitch></m:UISwitch>
                </m:List>
            </f:Form>
        `).then((xml: Document): void => {
            expect(xml).not.toBeNull('The document parsed should have value.');
            expect(xml.childNodes.length).toBe(1, 'The children of xml document only has 1 node Form');
            let form: Element = <Element>xml.childNodes.item(0);
            expect(form.childNodes.length).toBe(3, 'The children of form node has 3 nodes');
            expect(form.localName).toBe('Form');
            expect(form.prefix).toBe('f');
            expect(form.namespaceURI).toBe('cory/components/form');
            let uiswitch: Element = <Element>form.childNodes.item(2).childNodes.item(0);
            expect(uiswitch.localName).toBe('UISwitch');
            expect(uiswitch.prefix).toBe('m');
            expect(uiswitch.namespaceURI).toBe('cory/components/mobile');
            done();
        });
    });

    afterAll((): void => {});
});