{ config, ... }:
{
  name = "storm-software/media-kit";

  dotenv.enable = true;
  dotenv.filename = [
    ".env"
    ".env.local"
  ];
  dotenv.disableHint = true;

  # https://devenv.sh/basics/
  env.DEFAULT_LOCALE = "en_US";
  env.DEFAULT_TIMEZONE = "America/New_York";

  # https://devenv.sh/git-hooks/
  git-hooks = {
    enable = true;
    hooks = {
      yamllint = {
        enable = true;
        settings = {
          configPath = "${config.env.DEVENV_ROOT}/node_modules/@storm-software/linting-tools/yamllint/config.yml";
        };
        files = "\\.(yaml|yml)$";
        excludes = [
          "pnpm-lock.yaml"
          ".pre-commit-config.yaml"
        ];
      };
    };
  };
}
