/**
 * @file The interface of xml parser.
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

export interface IXMLParser {

    /**
     * Parse the XML string to the document promise.
     * @param xmlString XML string fragment
     * @return {Promise<Document>} The document promise
     */
    parse(xmlString: string): Promise<Document>;
}