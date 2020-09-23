/********************************************************************************
 * Copyright (C) 2020 TORO Limited and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { Command, CommandContribution, CommandRegistry, MAIN_MENU_BAR, MenuContribution, MenuModelRegistry, MenuNode, SubMenuOptions } from '@theia/core/lib/common';
import { injectable, interfaces } from 'inversify';

const RequirementsCommandNewItem: Command = {
    id: 'requirements-command-newitem',
    label: 'New Item'
};
const RequirementsCommandMyItems: Command = {
    id: 'requirements-command-myitem',
    label: 'My Items'
};
const RequirementsCommandRecent: Command = {
    id: 'requirements-command-recent',
    label: 'Recent'
};
const RequirementsCommandFeatureTimeline: Command = {
    id: 'requirements-command-featuretimeline',
    label: 'Feature Timeline'
};
const RequirementsCommandEpicRoadmap: Command = {
    id: 'requirements-command-epicroadmap',
    label: 'Epic Roadmap'
};
const RequirementsCommandAnalytics: Command = {
    id: 'requirements-command-analytics',
    label: 'Analytics'
};
const RequirementsCommandHelp: Command = {
    id: 'requirements-command-help',
    label: 'Help'
};

@injectable()
export class RequirementsCommandContribution implements CommandContribution {
    registerCommands(commands: CommandRegistry): void {
        commands.registerCommand(RequirementsCommandNewItem, {
            execute: () => {
                alert('This is a sample command!');
            }
        });
        commands.registerCommand(RequirementsCommandMyItems, {
            execute: () => {
                alert('This is sample command!');
            }
        });
        commands.registerCommand(RequirementsCommandRecent, {
            execute: () => {
                alert('This is sample command!');
            }
        });
        commands.registerCommand(RequirementsCommandFeatureTimeline, {
            execute: () => {
                alert('This is sample command!');
            }
        });
        commands.registerCommand(RequirementsCommandEpicRoadmap, {
            execute: () => {
                alert('This is sample command!');
            }
        });
        commands.registerCommand(RequirementsCommandAnalytics, {
            execute: () => {
                alert('This is sample command!');
            }
        });
        commands.registerCommand(RequirementsCommandHelp, {
            execute: () => {
                alert('This is sample command!');
            }
        });
    }
}

@injectable()
export class RequirementsMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void {
        const subMenuPath = [...MAIN_MENU_BAR, 'requirements-menu'];
        menus.registerSubmenu(subMenuPath, 'Requirements', {
            order: '3' // that should put the menu right next to the Edit menu
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: RequirementsCommandNewItem.id,
            order: '0'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: RequirementsCommandMyItems.id,
            order: '2'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: RequirementsCommandRecent.id,
            order: '3'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: RequirementsCommandFeatureTimeline.id,
            order: '4'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: RequirementsCommandEpicRoadmap.id,
            order: '5'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: RequirementsCommandAnalytics.id,
            order: '6'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: RequirementsCommandHelp.id,
            order: '7'
        });

        const subSubMenuPath = [...subMenuPath, 'requirements-sub-menu'];
        menus.registerSubmenu(subSubMenuPath, 'Requirements sub menu', { order: '8' });
        menus.registerMenuAction(subSubMenuPath, {
            commandId: RequirementsCommandHelp.id,
            order: '1'
        });

        const placeholder = new PlaceholderMenuNode([...subSubMenuPath, 'placeholder'].join('-'), 'Placeholder', { order: '0' });
        menus.registerMenuNode(subSubMenuPath, placeholder);
    }

}

/**
 * Special menu node that is not backed by any commands and is always disabled.
 */
export class PlaceholderMenuNode implements MenuNode {

    constructor(readonly id: string, public readonly label: string, protected options?: SubMenuOptions) { }

    get icon(): string | undefined {
        return this.options?.iconClass;
    }

    get sortString(): string {
        return this.options?.order || this.label;
    }

}

export const bindRequirementsMenu = (bind: interfaces.Bind) => {
    bind(CommandContribution).to(RequirementsCommandContribution).inSingletonScope();
    bind(MenuContribution).to(RequirementsMenuContribution).inSingletonScope();
};
