<?php
$commands = [
    'git pull',
    'git add .',
    'git commit -m "fix"',
    'git push'
];

foreach ($commands as $command) {
    shell_exec($command);
}