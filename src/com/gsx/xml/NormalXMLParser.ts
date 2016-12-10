/**
 * @file The normal xml parse.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { IXMLParser } from 'com/gsx/xml/IXMLParser';
import { Promise } from 'es6-promise';

export class NormalXMLParser implements IXMLParser {

    /**
     * @override
     * @param xmlString
     * @return {Promise<Document>}
     */
    public parse(xmlString: string): Promise<Document> {
        let domParser: DOMParser = new DOMParser();
        let doc: Document = domParser.parseFromString(
            xmlString.replace(/[\t\r\n]/g, '').replace(/\>\s*\</g, '><'), 'text/xml');
        return Promise.resolve(doc);
    }
}