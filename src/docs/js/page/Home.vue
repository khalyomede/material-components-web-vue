<template lang="pug">
	div
		mdc-top-app-bar(dense)
			mdc-top-app-bar-button(slot="start" @click="showSidebar") menu
			mdc-top-app-bar-title(slot="start") MDC Vue
			a(slot="end" href="https://github.com/khalyomede/material-components-web-vue" style="text-decoration: none")
				mdc-button.mdc-top-app-bar__action-item Github
		mdc-drawer(modal ref="sidebar")
			mdc-list
				mdc-list-item(v-ripple href="https://github.com/khalyomede/material-components-web-vue")  Github
		mdc-drawer-scrim
		div
			br
			br
			br
			br
		mdc-grid
			mdc-grid-row
				mdc-grid-cell
					h1(v-typography="'headline3'") Material design components for Vue.js.
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-button
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ button }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Raised button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-raised-button
								mdc-tab-content(slot="content" v-text-center) 
									base-code(lang="html") {{ raisedButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Unelevated button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-unelevated-button
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ unelevatedButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Outlined button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-outlined-button
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ outlinedButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Disabled button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-disabled-button
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ disabledButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Dense button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-dense-button
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ denseButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Icon button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-icon-button
								mdc-tab-content(slot="content")
									base-code(lang="html") {{ iconButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Trailing icon Button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-trailing-icon-button
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ trailingIconButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Button without ripple
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-button-without-ripple
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ buttonWithoutRipple }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Icon button only 
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-icon-button-only
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ iconButtonOnly }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Icon button only without ripple
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-icon-button-only-without-ripple
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ iconButtonOnlyWithoutRipple }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Disabled icon button only
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-icon-button-only-disabled
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ iconButtonOnlyDisabled }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Switch
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-switch
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Switch with custom labels
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-switch(on="oui" off="non")
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Disabled switch
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-switch(disabled)
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Checkbox
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-checkbox(id="c4ca4238a0b923820dcc509a6f75849b" value="c4ca4238a0b923820dcc509a6f75849b" text="Unchecked")
									mdc-checkbox(id="c81e728d9d4c2f636f067f89cc14862c" value="c81e728d9d4c2f636f067f89cc14862c" text="Checked" checked)
									mdc-checkbox(text="Disabled" disabled)
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Radio
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-radio(name="gender" id="woman" value="364dd90f4ca0a576f196b27651bd1852" text="Woman" checked)
									mdc-radio(name="gender" id="man" value="40544b125797259e54020558cb8f42a6" text="Man")
									mdc-radio(name="gender" id="other" value="ccd448ba2dc4d781bb1a0f0f93047f16" text="Other")
									mdc-radio(name="gender" id="disabled" value="disabled" text="Disabled" disabled)
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Data list
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-data-table(label="Desserts" responsive)
										thead
											mdc-data-table-row(header)
												mdc-data-table-cell(header) Dessert
												mdc-data-table-cell(header numeric) Carbs (g)
												mdc-data-table-cell(header numeric) Protein (g)
												mdc-data-table-cell(header) Comments
										tbody
											mdc-data-table-row
												mdc-data-table-cell Frozen yogurt
												mdc-data-table-cell(numeric) 24
												mdc-data-table-cell(numeric) 4.0
												mdc-data-table-cell Super tasty
											mdc-data-table-row
												mdc-data-table-cell Ice cream sandwich
												mdc-data-table-cell(numeric) 37
												mdc-data-table-cell(numeric) 4.3
												mdc-data-table-cell I like ice cream more
											mdc-data-table-row
												mdc-data-table-cell Eclair
												mdc-data-table-cell(numeric) 24
												mdc-data-table-cell(numeric) 6.0
												mdc-data-table-cell New filing flavor
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") List
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-list
										mdc-list-item(v-ripple) Single-line item
										mdc-list-item(v-ripple) Single-line item
										mdc-list-item(v-ripple) Single-line item
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Two line List
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-list(two-line)
										mdc-list-item
											mdc-list-item-primary First-line text
											mdc-list-item-secondary Second-line text
										mdc-list-item
											mdc-list-item-primary First-line text
											mdc-list-item-secondary Second-line text
										mdc-list-item
											mdc-list-item-primary First-line text
											mdc-list-item-secondary Second-line text
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") List groups
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									mdc-list-group
										mdc-list-group-title List 1
										mdc-list
											mdc-list-item Line item
											mdc-list-item Line item
											mdc-list-item Line item
										mdc-list-group-title List 2
										mdc-list
											mdc-list-item Line item
											mdc-list-item Line item
											mdc-list-item Line item
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") List dividers
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-list
										mdc-list-item Item 1 - Division 1
										mdc-list-item Item 2 - Division 1
										mdc-list-divider
										mdc-list-item Item 1 - Division 2
										mdc-list-item Item 2 - Division 2
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Single Selection List
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-list(selectable)
										mdc-list-item(selectable tabindex="0") Hot Dog
										mdc-list-item(selectable) Hamburger
										mdc-list-item(selectable) Tacos
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Pre-selected list item
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-list(selectable)
										mdc-list-item(selectable tabindex="0") Ice cream
										mdc-list-item(selectable active) Crumble
										mdc-list-item(selectable) Black forest cake
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") List with radio group
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-list(radio)
										mdc-list-item-radio(name="flavor" id="c4ca4238a0b923820dcc509a6f75849b") Chocolate
										mdc-list-item-radio(name="flavor" id="c81e728d9d4c2f636f067f89cc14862c") Vanilla
										mdc-list-item-radio(name="flavor" id="eccbc87e4b5ce2fe28308fd9f2a7baf3") No flavor
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") List with checkbox items
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-list(checkbox)
										mdc-list-item-checkbox(name="topping" id="c4ca4238a0b923820dcc509a6f75849b") Oreo topping
										mdc-list-item-checkbox(name="topping" id="c81e728d9d4c2f636f067f89cc14862c") Kit kat topping
										mdc-list-item-checkbox(name="topping" id="eccbc87e4b5ce2fe28308fd9f2a7baf3") With chocolatey sauce
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Snackbar
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-snackbar(ref="snackbarNormal")
										mdc-snackbar-label Chocolate soft baked cookies are on the way.
										mdc-snackbar-action
											mdc-button undo
									mdc-button(@click="closeSnackbarNormal") Close
									mdc-button(@click="openSnackbarNormal" unelevated) Open
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Stacked snackbar
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-snackbar(ref="snackbarStacked" stacked)
										mdc-snackbar-label While you were offline, we backed for you a delicious white and black chocolate cake.
										mdc-snackbar-action
											mdc-button send
									mdc-button(@click="closeSnackbarStacked") Close
									mdc-button(@click="openSnackbarStacked" unelevated) Open
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Leading snackbar
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-snackbar(ref="snackbarLeading" leading)
										mdc-snackbar-label Chocolate stock is at 12% right now.
										mdc-snackbar-action
											mdc-button refill
									mdc-button(@click="closeSnackbarLeading") Close
									mdc-button(@click="openSnackbarLeading" unelevated) Open
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Card
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									mdc-card
										mdc-card-content(v-typography="'body1'") Ice cream (derived from earlier iced cream or cream ice) is a sweetened frozen food typically eaten as a snack or dessert.
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Outlined card
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									mdc-card(outlined)
										mdc-card-content(v-typography="'body1'") Chocolate is a usually sweet, brown food preparation of roasted and ground cacao seeds that is made in the form of a liquid, paste, or in a block, or used as a flavoring ingredient in other foods.
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Rich media card
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									mdc-card
										mdc-card-media
											picture
												source(srcset="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" type="image/jpeg")
												img(src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" alt="Vienna" style="width: 100%; height: 100%; object-fit: cover; object-position: center center;")
										mdc-card-content(v-typography="'body1'") An éclair (also known as a sweet baguette) is an oblong pastry made with choux dough filled with a cream and topped with chocolate icing.
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Card actions
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									mdc-card
										mdc-card-content(v-typography="'body1'") A croissant is a buttery, flaky, viennoiserie pastry of Austrian and French origin, named for its historical crescent shape.
										mdc-card-action.text-right
											mdc-button(v-card-action-button) read more
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Full width card action
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									mdc-card
										mdc-card-content(v-typography="'body1'") Black Forest gâteau (British English) or Black Forest cake (American English) is a chocolate sponge cake with a rich cherry filling based on the German dessert Schwarzwälder Kirschtorte, literally "Black Forest Cherry-torte".
										mdc-card-action
											mdc-button(v-card-action-button raised style="width: 100%;") order
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Card with actions icon and button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									mdc-card
										mdc-card-content(v-typography="'body1'") A macaron or French macaroon is a sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond powder or ground almond, and food coloring.
										mdc-card-action
											mdc-button(v-card-action-button slot="button") read more
											mdc-button(v-card-action-button slot="button") share
											mdc-icon-button(v-card-action-icon slot="icon" icon="bookmark_order")
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Combined example
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									mdc-card
										mdc-card-content
											h3(v-typography="'headline6'" style="margin: 0px") Google
											span(v-typography="'overline'") 2 hours ago
										mdc-card-media
											picture
												source(srcset="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" type="image/jpeg")
												img(src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" alt="Vienna" style="width: 100%; height: 100%; object-fit: cover; object-position: center center;")
										mdc-card-content(v-typography="'body1'") Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese (typically cream cheese or ricotta), eggs, and sugar. If there is a bottom layer,
										mdc-card-action
											mdc-button(v-card-action-button slot="button") comment
											mdc-icon-button(v-card-action-icon slot="icon" icon="share")
											mdc-icon-button(v-card-action-icon slot="icon" icon="favorite_border")
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Text field
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-text-field(id="dessert" label="Dessert")
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Text field with helper text
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									mdc-text-field(id="dessert" label="Dessert")
										div(slot="helper-text") Choose a cake or an ice cream.
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Text field without label
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-text-field(id="dessert")
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Disabled text field
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-text-field(id="dessert" label="Dessert" disabled)
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Outlined text field
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-text-field(id="dessert" label="Dessert" outlined)
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Outlined text field without label
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-text-field(id="dessert" outlined)
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Full width text field
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-text-field(id="dessert" full-width)
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Text area text field
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-text-field(id="dessert" textarea label="Extra request")
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Text area without label
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-text-field(id="dessert" textarea)
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Image list
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-image-list
										mdc-image-list-item
											img(v-image-list src="https://picsum.photos/id/0/5616/3744" alt="Photo 1")
										mdc-image-list-item
											img(v-image-list src="https://picsum.photos/id/1/5616/3744" alt="Photo 2")
										mdc-image-list-item
											img(v-image-list src="https://picsum.photos/id/100/2500/1656" alt="Photo 3")
										mdc-image-list-item
											img(v-image-list src="https://picsum.photos/id/1000/5626/3635" alt="Photo 4")
										mdc-image-list-item
											img(v-image-list src="https://picsum.photos/id/1001/5616/3744" alt="Photo 5")
										mdc-image-list-item
											img(v-image-list src="https://picsum.photos/id/1002/4312/2868" alt="Photo 6")
										mdc-image-list-item
											img(v-image-list src="https://picsum.photos/id/1004/5616/3744" alt="Photo 7")
										mdc-image-list-item
											img(v-image-list src="https://picsum.photos/id/1006/3000/2000" alt="Photo 8")
										mdc-image-list-item
											img(v-image-list src="https://picsum.photos/id/1008/5616/3744" alt="Photo 9")
										mdc-image-list-item
											img(v-image-list src="https://picsum.photos/id/1009/5000/7502" alt="Photo 10")
										mdc-image-list-item
											img(v-image-list src="https://picsum.photos/id/1010/5184/3456" alt="Photo 11")
										mdc-image-list-item
											img(v-image-list src="https://picsum.photos/id/1012/3973/2639" alt="Photo 12")
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Image list with text overlay
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-image-list(text-overlay)
										mdc-image-list-item(text="Photo 1")
											img(v-image-list src="https://picsum.photos/id/0/5616/3744" alt="Photo 1")
										mdc-image-list-item(text="Photo 2")
											img(v-image-list src="https://picsum.photos/id/1/5616/3744" alt="Photo 2")
										mdc-image-list-item(text="Photo 3")
											img(v-image-list src="https://picsum.photos/id/100/2500/1656" alt="Photo 3")
										mdc-image-list-item(text="Photo 4")
											img(v-image-list src="https://picsum.photos/id/1000/5626/3635" alt="Photo 4")
										mdc-image-list-item(text="Photo 5")
											img(v-image-list src="https://picsum.photos/id/1001/5616/3744" alt="Photo 5")
										mdc-image-list-item(text="Photo 6")
											img(v-image-list src="https://picsum.photos/id/1002/4312/2868" alt="Photo 6")
										mdc-image-list-item(text="Photo 7")
											img(v-image-list src="https://picsum.photos/id/1004/5616/3744" alt="Photo 7")
										mdc-image-list-item(text="Photo 8")
											img(v-image-list src="https://picsum.photos/id/1006/3000/2000" alt="Photo 8")
										mdc-image-list-item(text="Photo 9")
											img(v-image-list src="https://picsum.photos/id/1008/5616/3744" alt="Photo 9")
										mdc-image-list-item(text="Photo 10")
											img(v-image-list src="https://picsum.photos/id/1009/5000/7502" alt="Photo 10")
										mdc-image-list-item(text="Photo 11")
											img(v-image-list src="https://picsum.photos/id/1010/5184/3456" alt="Photo 11")
										mdc-image-list-item(text="Photo 12")
											img(v-image-list src="https://picsum.photos/id/1012/3973/2639" alt="Photo 12")
								mdc-tab-content(slot="content" v-text-center)
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Image list with text below
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-image-list
										mdc-image-list-item(text="Photo 1")
											img(v-image-list src="https://picsum.photos/id/0/5616/3744" alt="Photo 1")
										mdc-image-list-item(text="Photo 2")
											img(v-image-list src="https://picsum.photos/id/1/5616/3744" alt="Photo 2")
										mdc-image-list-item(text="Photo 3")
											img(v-image-list src="https://picsum.photos/id/100/2500/1656" alt="Photo 3")
										mdc-image-list-item(text="Photo 4")
											img(v-image-list src="https://picsum.photos/id/1000/5626/3635" alt="Photo 4")
										mdc-image-list-item(text="Photo 5")
											img(v-image-list src="https://picsum.photos/id/1001/5616/3744" alt="Photo 5")
										mdc-image-list-item(text="Photo 6")
											img(v-image-list src="https://picsum.photos/id/1002/4312/2868" alt="Photo 6")
										mdc-image-list-item(text="Photo 7")
											img(v-image-list src="https://picsum.photos/id/1004/5616/3744" alt="Photo 7")
										mdc-image-list-item(text="Photo 8")
											img(v-image-list src="https://picsum.photos/id/1006/3000/2000" alt="Photo 8")
										mdc-image-list-item(text="Photo 9")
											img(v-image-list src="https://picsum.photos/id/1008/5616/3744" alt="Photo 9")
										mdc-image-list-item(text="Photo 10")
											img(v-image-list src="https://picsum.photos/id/1009/5000/7502" alt="Photo 10")
										mdc-image-list-item(text="Photo 11")
											img(v-image-list src="https://picsum.photos/id/1010/5184/3456" alt="Photo 11")
										mdc-image-list-item(text="Photo 12")
											img(v-image-list src="https://picsum.photos/id/1012/3973/2639" alt="Photo 12")
								mdc-tab-content(slot="content" v-text-center)
		div
			br
</template>
<script>
import BaseCode from "../component/BaseCode.vue";
import MdcCard from "../../../js/MdcCard.vue";
import MdcCardAction from "../../../js/MdcCardAction.vue";
import MdcCardContent from "../../../js/MdcCardContent.vue";
import MdcCardMedia from "../../../js/MdcCardMedia.vue";
import MdcCheckbox from "../../../js/MdcCheckbox.vue";
import MdcDataTable from "../../../js/MdcDataTable.vue";
import MdcDataTableRow from "../../../js/MdcDataTableRow.vue";
import MdcDataTableCell from "../../../js/MdcDataTableCell.vue";
import MdcDrawer from "../../../js/MdcDrawer.vue";
import MdcDrawerScrim from "../../../js/MdcDrawerScrim.vue";
import MdcFab from "../../../js/MdcFab.vue";
import MdcGrid from "../../../js/MdcGrid.vue";
import MdcGridCell from "../../../js/MdcGridCell.vue";
import MdcGridRow from "../../../js/MdcGridRow.vue";
import MdcHelperText from "../../../js/MdcHelperText.vue";
import MdcIconButton from "../../../js/MdcIconButton.vue";
import MdcImageList from "../../../js/MdcImageList.vue";
import MdcImageListItem from "../../../js/MdcImageListItem.vue";
import MdcList from "../../../js/MdcList.vue";
import MdcListDivider from "../../../js/MdcListDivider.vue";
import MdcListGroup from "../../../js/MdcListGroup.vue";
import MdcListGroupTitle from "../../../js/MdcListGroupTitle.vue";
import MdcListItem from "../../../js/MdcListItem.vue";
import MdcListItemPrimary from "../../../js/MdcListItemPrimary.vue";
import MdcListItemRadio from "../../../js/MdcListItemRadio.vue";
import MdcListItemCheckbox from "../../../js/MdcListItemCheckbox.vue";
import MdcListItemSecondary from "../../../js/MdcListItemSecondary.vue";
import MdcRadio from "../../../js/MdcRadio.vue";
import MdcSnackbar from "../../../js/MdcSnackbar.vue";
import MdcSnackbarLabel from "../../../js/MdcSnackbarLabel.vue";
import MdcSnackbarAction from "../../../js/MdcSnackbarAction.vue";
import MdcSwitch from "../../../js/MdcSwitch.vue";
import MdcTab from "../../../js/MdcTab.vue";
import MdcTabContent from "../../../js/MdcTabContent.vue";
import MdcTabItem from "../../../js/MdcTabItem.vue";
import MdcTextField from "../../../js/MdcTextField.vue";
import MdcTopAppBar from "../../../js/MdcTopAppBar.vue";
import MdcTopAppBarAction from "../../../js/MdcTopAppBarAction.vue";
import MdcTopAppBarButton from "../../../js/MdcTopAppBarButton.vue";
import MdcTopAppBarTitle from "../../../js/MdcTopAppBarTitle.vue";

import ExampleMdcButton from "../component/example/MdcButton.vue";
import ExampleMdcRaisedButton from "../component/example/MdcRaisedButton.vue";
import ExampleMdcUnelevatedButton from "../component/example/MdcUnelevatedButton.vue";
import ExampleMdcOutlinedButton from "../component/example/MdcOutlinedButton.vue";
import ExampleMdcDisabledButton from "../component/example/MdcDisabledButton.vue";
import ExampleMdcDenseButton from "../component/example/MdcDenseButton.vue";
import ExampleMdcIconButton from "../component/example/MdcIconButton.vue";
import ExampleMdcTrailingIconButton from "../component/example/MdcTrailingIconButton.vue";
import ExampleMdcButtonWithoutRipple from "../component/example/MdcButtonWithoutRipple.vue";
import ExampleMdcIconButtonOnly from "../component/example/MdcIconButtonOnly.vue";
import ExampleMdcIconButtonOnlyWithoutRipple from "../component/example/MdcIconButtonOnlyWithoutRipple.vue";
import ExampleMdcIconButtonOnlyDisabled from "../component/example/MdcIconButtonOnlyDisabled.vue";

import cardActionButton from "../../../js/directive/card-action-button";
import cardActionIconButton from "../../../js/directive/card-action-icon-button";
import imageList from "../../../js/directive/image-list";
import ripple from "../../../js/directive/ripple";
import textCenter from "../../../js/directive/text-center";
import typography from "../../../js/directive/typography";

import examples from "../example";

import Prism from "prismjs";

import "prismjs/components/prism-sass";
import "prismjs/components/prism-javascript";

export default {
  data() {
    return examples;
  },
  components: {
    BaseCode,
    ExampleMdcButton,
    ExampleMdcRaisedButton,
    ExampleMdcUnelevatedButton,
    ExampleMdcOutlinedButton,
    ExampleMdcDisabledButton,
    ExampleMdcDenseButton,
    ExampleMdcIconButton,
    ExampleMdcTrailingIconButton,
    ExampleMdcButtonWithoutRipple,
    ExampleMdcIconButtonOnly,
    ExampleMdcIconButtonOnlyWithoutRipple,
    ExampleMdcIconButtonOnlyDisabled,
    MdcCard,
    MdcCardAction,
    MdcCardContent,
    MdcCardMedia,
    MdcCheckbox,
    MdcDataTable,
    MdcDataTableCell,
    MdcDataTableRow,
    MdcDrawer,
    MdcDrawerScrim,
    MdcFab,
    MdcGrid,
    MdcGridCell,
    MdcGridRow,
    MdcHelperText,
    MdcImageList,
    MdcImageListItem,
    MdcListItemPrimary,
    MdcListItemSecondary,
    MdcList,
    MdcListDivider,
    MdcListGroup,
    MdcListItemRadio,
    MdcListItemCheckbox,
    MdcListGroupTitle,
    MdcListItem,
    MdcRadio,
    MdcSwitch,
    MdcSnackbar,
    MdcSnackbarAction,
    MdcSnackbarLabel,
    MdcTab,
    MdcTabContent,
    MdcTextField,
    MdcTabItem,
    MdcTopAppBar,
    MdcTopAppBarAction,
    MdcTopAppBarButton,
    MdcTopAppBarTitle
  },
  directives: {
    cardActionButton,
    cardActionIconButton,
    imageList,
    ripple,
    textCenter,
    typography
  },
  methods: {
    openSnackbarNormal() {
      this.$refs.snackbarNormal.element.open();
    },
    openSnackbarStacked() {
      this.$refs.snackbarStacked.element.open();
    },
    openSnackbarLeading() {
      this.$refs.snackbarLeading.element.open();
    },
    closeSnackbarNormal() {
      this.$refs.snackbarNormal.element.close();
    },
    closeSnackbarStacked() {
      this.$refs.snackbarStacked.element.close();
    },
    closeSnackbarLeading() {
      this.$refs.snackbarLeading.element.close();
    },
    showSidebar() {
      this.$refs.sidebar.element.open = true;
    }
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
