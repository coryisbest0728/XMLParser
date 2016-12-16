/**
 * @file The implements of the DFS traversal
 *
 * @author Cory(kuanghongrui@baijiahulian.com)
 */

import { IXMLTraversal } from 'com/gsx/xml/IXMLTraversal';

export class DFSXMLTraversal implements IXMLTraversal {

    /**
     * @override
     * @param {Node} xmlNode
     * @param {Function} iteratorFn
     * @return {Promise<Node>}
     */
    public traverse(xmlNode: Node, iteratorFn?: (itemElement: Node) => Node): Promise<Node> {
        // let childNodes: NodeList = xmlDoc.childNodes;
        // for (let i = 0, j = childNodes.length; i < j; ++i) {
        //     let elem: Element = <Element>childNodes.item(i);
        // }
        return null;
    }

    // private traverseByNode(elem: Node, iteratorFn?: (itemElement: Element)=>Element): Promise<Node> {
    //
    // }
}